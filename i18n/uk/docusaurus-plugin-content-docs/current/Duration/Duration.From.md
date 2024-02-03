---
title: Duration.From
---

# Duration.From


## Description

Створює тривалість із заданого значення.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Повертає значення <code>duration</code> із заданого <code>value</code>. Якщо задане значення <code>value</code> – <code>null</code>, <code>Duration.From</code> повертає значення <code>null</code>.  Якщо задане значення <code>value</code> – <code>duration</code>, повертається значення <code>value</code>. На значення <code>duration</code> можуть перетворюватися значення вказаних нижче типів.      <ul>        <li><code>text</code>: значення <code>duration</code> із текстових форм часу, що минув (д.г:х:с). Докладніші відомості див. в <code>Duration.FromText</code>.</li>       <li><code>number</code>: значення <code>duration</code>, еквівалентне кількості повних і неповних днів, вираженій значенням <code>value</code>.</li>      </ul>Якщо <code>value</code> належить до будь-якого іншого типу, повертається помилка.


## Examples

### Example #1 
Перетворити &lt;code&gt;2.525&lt;/code&gt; на значення &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
