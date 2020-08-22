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

cp dist/task-force-frontend/* /deploy'''
      }
    }

  }
}