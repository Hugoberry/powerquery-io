---
title: Text.Format
---

# Text.Format


## Description

Επιστρέφει μορφοποιημένο κείμενο από μια συμβολοσειρά και ορίσματα μορφοποίησης.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Επιστρέφει μορφοποιημένο κείμενο που δημιουργείται εφαρμόζοντας το <code>arguments</code> από μια λίστα ή εγγραφή σε μια συμβολοσειρά μορφοποίησης <code>formatString</code>. Ενδέχεται επίσης να παρέχεται μια προαιρετική τιμή <code>culture</code> (για παράδειγμα, "en-US").


## Examples

### Example #1 
Μορφοποιήστε μια λίστα αριθμών.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Μορφοποιήστε διαφορετικούς τύπους δεδομένων από μια εγγραφή σύμφωνα με την κουλτούρα Ελληνικών Ελλάδας.
```powerquery
Text.Format(
    "The time for the #[distance] km run held in #[city] on #[date] was #[duration].",
    [
        city = "Seattle",
        date = #date(2015, 3, 10),
        duration = #duration(0, 0, 54, 40),
        distance = 10
    ],
    "en-US"
)
```

Result: 
```powerquery
"The time for the 10 km run held in Seattle on 3/10/2015 was 00:54:40."
```




## Category
Text.Conversions from and to text
