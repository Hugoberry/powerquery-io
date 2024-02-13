---
title: Currency.From
---

# Currency.From


Zwraca wartość waluty dla danej wartości.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Zwraca wartość typu <code>currency</code> dla danej wartości: <code>value</code>. Jeśli dana wartość <code>value</code> to <code>null</code>, funkcja <code>Currency.From</code> zwraca wartość <code>null</code>. Jeśli typ danej wartości <code>value</code> to <code>number</code>, czyli liczba z zakresu waluty, część ułamkowa wartości <code>value</code> jest zaokrąglana do 4 miejsc po przecinku i zwracana. Jeśli wartość <code>value</code> jest wartością innego typu, zostanie ona najpierw przekonwertowana na wartość typu <code>number</code> przy użyciu funkcji <code>Number.FromText</code>. Poprawny zakres wartości waluty to <code>-922 337 203 685 477,5808</code>–<code>922 337 203 685 477,5807</code>. Zobacz opis funkcji <code>Number.Round</code>, aby uzyskać listę dostępnych trybów zaokrąglania. Ustawienie domyślne to <code>RoundingMode.ToEven</code>. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).


## Examples

### Example #1 
Pobierz wartość &lt;code&gt;currency&lt;/code&gt;: &lt;code&gt;&#34;1,23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Uzyskaj wartość &lt;code&gt;currency&lt;/code&gt; dla ciągu &lt;code&gt;&#34;1,23455&#34;&lt;/code&gt; przy użyciu trybu &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
