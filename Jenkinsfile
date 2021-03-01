pipeline {
    agent { 
        dockerfile {
            customWorkspace '/app'
            filename 'JenkinsDocker'
         } 
     }

    stages {
    
        stage('Prepare environment') {
            steps {
                sh 'export WEB=true'
                sh 'echo $WEB'
           }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }        
    }
}
