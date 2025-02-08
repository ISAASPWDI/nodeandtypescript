

interface RunOptions {
  base: Number,
  limit: Number,
  showTable: boolean,
}

export class ServerApp {



  static run( options: RunOptions ) {
    console.log('server running');
    
    console.log(options);
    


  }

}