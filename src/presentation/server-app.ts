import { log } from "console";
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOptions {
  base: number,
  limit: number,
  showTable: boolean,
}

export class ServerApp {



  static run( { base, limit, showTable }: RunOptions ) {
    console.log('server running');
    const tabla = new CreateTable().execute({ base, limit });
    // console.log(options);
    const wasCreated = new SaveFile().execute({ fileContent: tabla, base: base });
    if ( showTable ) console.log(tabla);
    


  }

}