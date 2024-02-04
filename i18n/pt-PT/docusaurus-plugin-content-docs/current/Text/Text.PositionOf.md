---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Devolve a primeira posição do valor (-1 se não for encontrado).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Details

Devolve a posição da ocorrência especificada do valor de texto <code>substring</code> encontrado em <code>text</code>.    É possível utilizar um parâmetro opcional <code>occurrence</code> para especificar a posição da ocorrência a devolver (primeira ocorrência por predefinição).    Devolve -1 se <code>substring</code> não tiver sido encontrado.      <div>         <code>comparer</code> é um <code>Comparer</code> que é utilizado no controlo da comparação. Os comparadores podem ser utilizados para fornecer comparações não sensíveis a maiúsculas/minúsculas ou baseadas na cultura ou na região.      </div>      <div>        Os comparadores incorporados seguintes estão disponíveis na linguagem da fórmula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: utilizado para executar uma comparação ordinal exata</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: utilizado para executar uma comparação ordinal exata não sensível a maiúsculas/minúsculas</li>        <li> <code>Comparer.FromCulture</code>: utilizado para executar uma comparação baseada na cultura</li>      </ul>


## Examples

### Example #1 
Obter a posição da primeira ocorrência de &#34;Mundo&#34; no texto &#34;Olá, Mundo! Olá, Mundo!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Obter a posição da última ocorrência de &#34;Mundo&#34; em &#34;Olá, Mundo! Olá, Mundo!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
