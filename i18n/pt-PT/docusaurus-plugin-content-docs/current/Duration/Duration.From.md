---
title: Duration.From
---

# Duration.From


## Description

Cria uma duração a partir do valor especificado.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Devolve um valor <code>duration</code> a partir do <code>value</code> especificado. Se o <code>value</code> especificado for <code>null</code>, <code>Duration.From</code> devolve <code>null</code>.  Se o <code>value</code> especificado for <code>duration</code>, será devolvido <code>value</code>. É possível converter os seguintes tipos de valor num valor <code>duration</code>:      <ul>        <li><code>text</code>: Um valor <code>duration</code> a partir de formatos texto de tempo decorrido (d.h:m:s). Consulte <code>Duration.FromText</code> para obter detalhes.</li>        <li><code>number</code>: Um valor <code>duration</code> equivalente ao número de dias inteiros e fracionais expresso por <code>value</code>.</li>      </ul>Se <code>value</code> for de qualquer outro tipo, será devolvido um erro.


## Examples

### Example #1 
Converter &lt;code&gt;2.525&lt;/code&gt; num valor &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
