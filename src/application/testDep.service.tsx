import { Instantiation, Singleton } from 'one-atom';

@Singleton()
export class TestDepService {
  constructor() {
    // Empty
  }
}

// vite should inject this
Instantiation.__registerMetaData(TestDepService, []);
