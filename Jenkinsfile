pipeline {
    agent { docker { image 'node:12-alpine' } }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm install --dev'
                sh 'npm run test'
            }        
        }
        stage('Build') {
            steps {
                sh 'npm run dev'
            }        
        }        
    }
}
