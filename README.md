- Install dependencies

  `npm install`

- Enter your API key and rig settings into config.json
- Run with

  `node index.js --mode <power mode> --config <path to config.json>`
  
  - `<power mode>` is one of [LOW, MEDIUM, HIGH]
  
  - `<path to config.json>` can be omitted if config.js resides in the same directory as index.js or the executable
  

- Create an executable with

  `npm run build`
