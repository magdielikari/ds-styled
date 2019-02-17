import words from '../index'

test('says hello world',() =>(
    expect(words()).toBe('Hello World')
))