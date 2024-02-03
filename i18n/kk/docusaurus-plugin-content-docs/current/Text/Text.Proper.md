---
title: Text.Proper
---

# Text.Proper


## Description

Әр сөздің бірінші әрпін бас әріп етеді.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

<code>text</code> мәтіндік мәніндегі әр сөздің бірінші әрпін ғана бас әріп етудің нәтижесін қайтарады. Барлық басқа әріптер төменгі регистрмен қайтарылады. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1 
Қарапайым сөйлемде &lt;code&gt;Text.Proper&lt;/code&gt; пайдалану.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
