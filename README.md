  # Picnic App Design

  This is a code bundle for Picnic App Design. The original project is available at https://www.figma.com/design/4y5XoaWbsvCbs6tdPNlIoi/Picnic-App-Design.

  ## Setting up npm

  Run `brew install nvm` to install the node version manager

  Run `export NVM_DIR="$HOME/.nvm"`
  
  Run `[ -s "$(brew --prefix nvm)/nvm.sh" ] && . "$(brew --prefix nvm)/nvm.sh"` to be able to run nvm anywhere

  Add the text below to the end of the file: 

  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion

  Run `nvm install 18` and then `nvm use 18` this will install node version 18 and then will set it as your default node

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  
  # To deploy to github pages

  Run `npm run deploy` this will build the assets and then deploy it to github pages. Make sure the changes for the build are also committed or it may not show up properly.

  You can view the build status here: https://github.com/ubkenneths/moodpicnic/actions
