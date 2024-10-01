pipeline {
    agent any

     
    stages {
        stage('Build') { 
            steps {
                    bat 'cd client && npm install'

            }
        }
        stage('Test') {
            steps {
                bat ' cd client &&  react-scripts test --watchAll --testMatch "**/src/**/*.test.js"'
            }
        }
    }
     
}