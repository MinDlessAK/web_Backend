 const chalk=require("chalk");
 const validator=require("validator")

 console.log(chalk.blue.underline.inverse("success"));
 const res=validator.isEmail("ag6386184@gmail.com");
 console.log(res ? chalk.green.inverse(res): chalk.supportsColorStderr.inverse(res));

 