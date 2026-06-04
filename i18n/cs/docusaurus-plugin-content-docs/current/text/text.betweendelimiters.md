---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

Vrátí část z `text` mezi zadanými `startDelimiter` a `endDelimiter`. Volitelné číselná hodnota `startIndex` označuje, který výskyt `startDelimiter` se má brát. Volitelný seznam `startIndex` označuje, který výskyt `startDelimiter` se má brát, a také jestli se jeho pořadí má počítat od začátku nebo od konce vstupu. `endIndex` je podobné, akorát že pořadí se počítá relativně vůči `startIndex`.


## Examples

### Example #1
Získat část z „111 (222) 333 (444)“ mezi (první) otevírací závorkou a (první) uzavírací závorkou, která ji následuje.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Získat část z „111 (222) 333 (444)“ mezi druhou otevírací závorkou a první uzavírací závorkou, která ji následuje.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Získat část z „111 (222) 333 (444)“ mezi druhou otevírací závorkou od konce a druhou uzavírací závorkou, která ji následuje.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
