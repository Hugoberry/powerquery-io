---
title: Number.From
---

# Number.From


## Description

Δημιουργεί έναν αριθμό από την τιμή που δίνεται.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Επιστρέφει μια τιμή <code>number</code> από το δεδομένο <code>value</code>. Μπορεί επίσης να παρέχεται ένα προαιρετικό <code>culture</code> (για παράδειγμα, "en-US").Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>Number.From</code> επιστρέφει <code>null</code>. Αν το δεδομένο <code>value</code> είναι <code>number</code>, επιστρέφεται <code>value</code>. Οι τιμές των ακόλουθων τύπων μπορούν να μετατραπούν σε τιμή <code>number</code>:      <ul>        <li><code>text</code>: Μια τιμή <code>number</code> από αναπαράσταση κειμένου. Χειρίζονται κοινές μορφές κειμένου ("15", "3,423.10", "5.0E-10"). Ανατρέξτε στο <code>Number.FromText</code> για λεπτομέρειες.</li>        <li><code>logical</code>: 1 για <code>true</code>, 0 για <code>false</code>..</li>        <li><code>datetime</code>: Ένας αριθμός κινητής υποδιαστολής διπλής ακρίβειας που περιέχει ένα ισοδύναμο ημερομηνίας OLE Automation.</li>        <li><code>datetimezone</code>: Ένας αριθμός κινητής υποδιαστολής διπλής ακρίβειας που περιέχει μια ημερομηνία αυτοματοποίησης OLE που ισοδυναμεί με την τοπική ημερομηνία και ώρα του <code>value</code>.</li>        <li><code>date</code>: Ένας αριθμός κινητής υποδιαστολής διπλής ακρίβειας που περιέχει τον αριθμό κινητής υποδιαστολής διπλής ακρίβειας που περιέχει την τοπική ημερομηνία και ώρα. ένα ισοδύναμο ημερομηνίας αυτοματισμού OLE.</li>        <li><code>time</code>:  Εκφράζεται σε κλασματικές ημέρες.</li>        <li><code>duration</code>: Εκφράζεται σε ολόκληρες και κλασματικές ημέρες.</li>      </ul>Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, επιστρέφεται ένα σφάλμα.


## Examples

### Example #1 
Λάβετε την τιμή &lt;code&gt;number&lt;/code&gt; του &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Λάβετε την τιμή &lt;code&gt;number&lt;/code&gt; του &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Λάβετε την τιμή &lt;code&gt;number&lt;/code&gt; του &lt;code&gt;&#34;12,3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
