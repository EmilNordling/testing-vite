import { Instantiation, Singleton } from 'one-atom';
import { TestDepService } from './testDep.service';

@Singleton()
export class TestService {
  constructor(public readonly testDepService: TestDepService) {
    // Empty
  }
}

// vite should inject this
Instantiation.__registerMetaData(TestService, [TestDepService]);
