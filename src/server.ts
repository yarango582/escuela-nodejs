import app from './app';

export default class Server {
  public port: number;

  constructor(port: number) {
    this.port = port;
  }

  static init(port: number) {
    return new Server(port);
  }

  start(callback: () => void) {
    app.listen(this.port, callback);
  }

}
