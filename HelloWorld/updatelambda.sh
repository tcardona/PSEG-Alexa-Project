#!/usr/bin/env bash
# Be sure this shell script has execute and write permissions  (use chmod +xw if needed)
# Be sure your Lambda function already exists.  It will be over-written.
# Install the AWS CLI  https://aws.amazon.com/cli/
#

rm index.zip
cd src
zip -X -r ../index.zip *
cd ..
aws lambda update-function-code --function-name HelloWorld  --zip-file fileb://index.zip
