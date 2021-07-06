const {
    camelCaseConverter
  } = require ('./example');
  
  describe('Tests if the string is a space', () => {
    test('The string has a space', () => {
        expect(camelCaseConverter(' ')).toBe('');    
    })
  });

  describe('Tests if dash removed between two words', () => {
    test('Dash removed between words', () => {
        expect(camelCaseConverter('test_test')).toBe('testTest');    
    })
  });

  describe('Tests dash with capital letter', () => {
    test('Dash removed with capital letter', () => {
        expect(camelCaseConverter('_test_test_test_test')).toBe('testTestTestTest');    
    })
  });

  describe('Tests dash removed between several words', () => {
    test('Dash removed between several words', () => {
        expect(camelCaseConverter('_test_test_test_test')).toBe('testTestTestTest');    
    })
  });

  describe('Tests dash with capital letter', () => {
    test('Dash removed with capital letter', () => {
        expect(camelCaseConverter('_test_Test_test_test')).toBe('testTestTestTest');    
    })
  });

  describe('Tests if space removed between two words', () => {
    test('Space removed between words', () => {
        expect(camelCaseConverter('test test')).toBe('testTest');    
    })
  });

  describe('Tests if minus-dash removed between two words', () => {
    test('Minus-dash removed between words', () => {
        expect(camelCaseConverter('test-test')).toBe('testTest');    
    })
  });

  describe('Tests if the first letter is a capital letter', () => {
    test('First letter changed to a lowrcase letter', () => {
        expect(camelCaseConverter('Test_test')).toBe('testTest');    
    })
  });

  describe('Tests a string with diffrent dashes ans spaces', () => {
    test('Dashes and spaces removed', () => {
        expect(camelCaseConverter('_test-Test test_test test')).toBe('testTestTestTestTest');    
    })
  });

  describe('Tests if a string returns as a string and the first letter is lowercase', () => {
    test('String with first letter is a lowercase', () => {
        expect(camelCaseConverter('Testword')).toBe('testword');    
    })
  });

  describe('Tests if a first letter lowerse string returns as the same string', () => {
    test('String still the same', () => {
        expect(camelCaseConverter('testword')).toBe('testword');    
    })
  });

  describe('Tests if a camelCase returns as camelCase', () => {
    test('camelCase returns as camelCase', () => {
        expect(camelCaseConverter('testTest')).toBe('testTest');    
    })
  });

  