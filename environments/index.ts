import local from './local';
import development from './development';
import staging from './staging';
import production from './production';

const environments: any = {
    local,
    development,
    staging,
    production
}

export default Object.assign(
    local,
    environments[process.env.NODE_ENV || 'local']
) as Object
