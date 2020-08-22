pipeline {
  agent any
  stages {
    stage('Build Angular - TF') {
      agent {
        docker {
          image 'node:12.18-alpine'
        }

      }
      steps {
        sh '''cd task-force-frontend

npm install

npm run build'''
      }
    }

  }
}