# A simple RESTful application
- This is a simple CRUD application in node.js. Using the basics of a RESTful api design

## Getting Started
Follow these instructions to get a copy of the project up and running

### Prerequisites
- Node.js (v14 or later recommended)
- Docker
- Git

### Setup
```
git clone https://github.com/Joachim-Chuah/CS415
```
- once cloned
```
cd CS415
docker build -t my-nodejs-app .
docker run -p 3000:3000 my-nodejs-app
```

### Access API documentation
- copy http://localhost:3000 into browser
- instructions in browser should tell you to go to http://localhost:3000/api-docs to see swagger documentation

### Applying to kubernetes 
```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```
#### verify that pods are running
```
kubectl get pods
```
### Test config and fib
```
curl "http://localhost:3000/config"
```
```
curl "http://localhost:3000/fib?length=n" where n is the number of fib sequence you want
```
