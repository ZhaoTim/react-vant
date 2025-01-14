import jest from 'jest';
import { setNodeEnv } from '../common/index.js';
import { ROOT, JEST_CONFIG_FILE } from '../common/constant.js';

const { runCLI } = jest;

export function test(command: any) {
  setNodeEnv('test');

  const config = {
    rootDir: ROOT,
    watch: command.watch,
    config: JEST_CONFIG_FILE,
    coverage: command.coverage,
  } as any;

  runCLI(config, [ROOT])
    .then((response) => {
      if (!response.results.success && !command.watch) {
        process.exit(1);
      }
    })
    .catch((err) => {
      console.log(err);

      if (!command.watch) {
        process.exit(1);
      }
    });
}
