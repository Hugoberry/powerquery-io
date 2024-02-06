---
title: Number.FromText
---

# Number.FromText


Tworzy liczby na podstawie wartości w typowych formatach tekstowych („15”, „3 423,10”, „5,0E-10”).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Zwraca wartość typu <code>number</code> z danej wartości tekstowej <code>text</code>. <ul>  <li><code>text</code>: Tekstowa reprezentacja wartości liczbowej. Reprezentacja musi być zapisana w typowym formacie liczbowym, takim jak „15”, „3,423.10” lub „5.0E-10”.</li>  <li><code>culture</code>: Opcjonalna kultura kontrolująca sposób interpretacji elementu <code>text</code> (na przykład „en-US”).</li> </ul>


## Examples

### Example #1 
Określ wartość liczbową na podstawie wartości &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Określ wartość liczbową na podstawie wartości &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
