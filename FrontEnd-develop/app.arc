@app
jobstarter-frontend

@static
folder dist
fingerprint true

@http
/help
  method get
  src server/http/get-index

@aws
profile samireu1
region eu-west-1