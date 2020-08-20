pipeline {
  agent any
  stages {
    stage('help please') {
      agent {
        docker {
          image 'node:current-alpine'
        }

      }
      steps {
        sh '''ls

cd task-force-frontend

npm install

npm run build'''
      }
    }

  }
}