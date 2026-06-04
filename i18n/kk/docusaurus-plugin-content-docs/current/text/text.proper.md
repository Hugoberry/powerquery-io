---
title: Text.Proper
---

# Text.Proper


Әр сөздің бірінші әрпін бас әріп етеді.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

`text` мәтіндік мәніндегі әр сөздің бірінші әрпін ғана бас әріп етудің нәтижесін қайтарады. Барлық басқа әріптер төменгі регистрмен қайтарылады. Сонымен қатар қосымша `culture` берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1
Қарапайым сөйлемде `Text.Proper` пайдалану.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
