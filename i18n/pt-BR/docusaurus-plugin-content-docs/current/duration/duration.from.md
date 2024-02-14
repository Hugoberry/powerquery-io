---
title: Duration.From
---

# Duration.From


Cria uma duração a partir do valor especificado.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Retorna um valor <code>duration</code> com base no <code>value</code> especificado. Se o <code>value</code> especificado for <code>null</code>, <code>Duration.From</code> retornará <code>null</code>. Se o <code>value</code> especificado for <code>duration</code>, <code>value</code> será retornado. Os valores dos tipos a seguir podem ser convertidos em um valor <code>duration</code>:      <ul>        <li><code>text</code>: um valor <code>duration</code> com base no formato textual de tempo decorrido (d.h:m:s). Consulte <code>Duration.FromText</code> para obter informações detalhadas.</li>        <li><code>number</code>: um equivalente de <code>duration</code> para o número de dias inteiros e fracionários expressos por <code>value</code>.</li>      </ul>Se <code>value</code> for de qualquer outro tipo, um erro será retornado.


## Examples

### Example #1 
Converta &lt;code&gt;2.525&lt;/code&gt; em um valor &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
