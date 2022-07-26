pipeline {
    agent any

    environment {
        HOST_ROOT_DIR='/deploy/moeflow-frontend'
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t moeooo/moeflow-frontend:$TAG_NAME .'
            }
        }
        stage('Deploy') { 
            steps {
                sh 'rm -rf $HOST_ROOT_DIR/build-old'
                script {
                    try {
                        sh 'mv $HOST_ROOT_DIR/build $HOST_ROOT_DIR/build-old'
                    } catch (all) {}
                }
                script {
                    def TMP_DOCKER_ID = sh(
                        script: "docker create moeooo/moeflow-frontend:${env.TAG_NAME}", 
                        returnStdout: true
                    ).trim()
                    sh "docker cp ${TMP_DOCKER_ID}:/app/build ${env.HOST_ROOT_DIR}"
                    sh "docker rm -v ${TMP_DOCKER_ID}"
                }
                sh 'docker system prune --all --force --filter "label=project=moeflow-frontend"'
            }
        }
    }
}