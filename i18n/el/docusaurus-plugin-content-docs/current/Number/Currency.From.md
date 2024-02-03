---
title: Currency.From
---

# Currency.From


## Description

Επιστρέφει μια τιμή νομισματικής μονάδας από τη δεδομένη τιμή.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Επιστρέφει μια τιμή <code>currency</code> από το δεδομένο <code>value</code>. Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>Currency.From</code> επιστρέφει <code>null</code>. Αν το δεδομένο <code>value</code> είναι <code>number</code> εντός του εύρους νομίσματος, κλασματικό μέρος του <code>value</code> στρογγυλοποιείται σε 4 δεκαδικά ψηφία και επιστρέφεται. Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, θα μετατραπεί πρώτα σε <code>number</code> χρησιμοποιώντας το <code>Number.FromText</code>. Το έγκυρο εύρος για το νόμισμα είναι <code>-922,337,203,685,477,5808</code> έως <code>922,337,203,685,477,5807</code>. Ανατρέξτε στο <code>Number.Round</code> για τις διαθέσιμες λειτουργίες στρογγυλοποίησης. Η προεπιλογή είναι <code>RoundingMode.ToEven</code>. Μπορεί επίσης να παρέχεται ένα προαιρετικό <code>culture</code> (για παράδειγμα, "en-US").


## Examples

### Example #1 
Λάβετε την τιμή &lt;code&gt;currency&lt;/code&gt; του &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Λάβετε την τιμή &lt;code&gt;currency&lt;/code&gt; του &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; χρησιμοποιώντας το &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
