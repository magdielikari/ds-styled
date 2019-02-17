import { hi } from '../index'

test('says hello world',() =>(
    expect(hi()).toBe('Hello World')
))