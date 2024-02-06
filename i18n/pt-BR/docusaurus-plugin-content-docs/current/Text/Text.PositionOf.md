---
title: Text.PositionOf
---

# Text.PositionOf


Retorna a primeira posição do valor (- 1 se ela não for encontrada).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Retorna a posição da ocorrência especificada do valor de texto <code>substring</code> encontrado em <code>text</code>.    Um parâmetro opcional <code>occurrence</code> pode ser usado para especificar qual posição de ocorrência retornar (primeira ocorrência por padrão).    Retorna -1 se <code>substring</code> não for encontrado.      <div>        <code>comparer</code> é um <code>Comparer</code> que é usado para controlar a comparação. Os comparadores podem ser usados ​​para fornecer comparações sem diferenciar maiúsculas de minúsculas ou com reconhecimento de cultura e localidade.      </div>      <div>        Os seguintes comparadores internos estão disponíveis na linguagem da fórmula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: usado para realizar uma comparação ordinal exata</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: usado para realizar uma comparação ordinal exata sem diferenciar maiúsculas de minúsculas</li>        <li> <code>Comparer.FromCulture</code>: usado para realizar uma comparação com reconhecimento de cultura</li>      </ul>


## Examples

### Example #1 
Obtenha a posição da primeira ocorrência de &#34;Mundo&#34; no texto &#34;Olá, Mundo! Olá, Mundo!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Obtenha a posição da última ocorrência de &#34;Mundo&#34; no texto &#34;Olá, Mundo! Olá, Mundo!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
