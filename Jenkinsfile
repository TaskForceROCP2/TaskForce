pipeline {
  agent any
  stages {
    stage('Build Angular - TF') {
      agent {
        docker {
          image 'node:12.18-alpine'
          args '--mount type=bind,source=/home/ec2-user/deploy,target=/deploy'
        }

      }
      steps {
        sh '''cd task-force-frontend

npm install

npm run build

ls

cp -r dist/task-force-frontend/* /deploy'''
      }
    }

    stage('Deploy to S3') {
      agent {
        docker {
          image 'amazon/aws-cli'
          args '--mount type=bind,source=/home/ec2-user/deploy,target=/deploy --interactive --entrypoint=""'
        }

      }
      when {
        expression {
          env.BRANCH_NAME == 'master'
        }

      }
      steps {
        sh 'aws s3 cp /deploy s3://task-force-duo --recursive --acl public-read'
      }
    }

  }
}