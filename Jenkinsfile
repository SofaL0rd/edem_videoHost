pipeline {
    agent any

     environment {
        NODE_ENV = 'test'   // Set the environment to test
    }
    stages {
        stage('Build') { 
            steps {
                    bat 'cd client && npm install'

            }
        }
        stage('Test') {
            steps {
                bat 'npm test -- --ci --coverage'
            }
        }
    }
     post {
        always {
            // Archive test results (if any) and the coverage report
            junit 'coverage/junit/*.xml' // If using Jest JUnit reporting
            archiveArtifacts artifacts: 'coverage/**', allowEmptyArchive: true
        }

        failure {
            mail to: 'nazzar2303@gmail.com',
                subject: "Pipeline failed",
                body: "Please check the Jenkins job."
        }
    }
}