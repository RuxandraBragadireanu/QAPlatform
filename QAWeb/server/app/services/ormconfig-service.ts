import {Service} from '@tsed/common';
import {ConnectionOptions, createConnection} from 'typeorm';
import * as Path from 'path';

@Service()
export class OrmConfigService {

  private _connection;

  private settings: ConnectionOptions = {
    'type': 'mysql',
    'host': 'localhost',
    'port': 3306,
    'username': 'root',
    'password': 'root',
    'database': 'FORUM-DB',
    'logging': ['error'],
    'entities': [
      Path.resolve(`${__dirname}/../models/*.js`)
    ]
  };

  constructor() {
    this._connection = createConnection(this.settings);
  }

  public get connection() {
    return this._connection;
  }

}
