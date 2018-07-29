This project is to demo how to do automation web test by using protractor, cucumber, and chai.

# How to prepare environment
1. Set up virtual environment

Install virtual env (if not yet)
```
pip install virtualenv
```

Create virtual env (if not yet)
```
virtualenv venv
```

Start virtual env
```
source venv/bin/activate
```

2. Install latest nodejs
```
nvm install 10.6
```

# Install
```
npm install -g protractor
```

```
npm install
```

```
webdriver-manager update
```

# How to run tests
```
npm test
```

# Customized runs

To run all tests on default config (protractor.conf.js) - browserName = Chrome
```
protractor
```

## To run all tests on firefox
```
protractor --capabilities.browserName=firefox
```

## To run a single test (for debugging a test scenario), put "@test" on top of a scenario in feature file.
```
protractor --cucumberOpts.tags=@test
```

## To run all tests in headless mode
```
protractor --capabilities.chromeOptions.args=headless
```

# How to test on Jenkins:
```
protractor jenkins.conf.js
```

# Customized runs
```
protractor --capabilities.browserName=firefox --capabilities.maxInstances=2 --capabilities.shardTestFiles=true
```
# How to use image comparison
See example at
```
stepDefinitions/common.steps.ts
```
