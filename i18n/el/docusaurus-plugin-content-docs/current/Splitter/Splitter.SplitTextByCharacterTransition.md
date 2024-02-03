---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου σύμφωνα με μια μετάβαση από ένα είδος χαρακτήρα σε άλλο. Οι παράμετροι \{0} και \{1} μπορεί να είναι είτε μια λίστα χαρακτήρων είτε μια συνάρτηση η οποία λαμβάνει έναν χαρακτήρα και επιστρέφει true/false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου σύμφωνα με μια μετάβαση από ένα είδος χαρακτήρα σε άλλο. Οι παράμετροι <code>before</code> και <code>after</code> μπορεί να είναι είτε μια λίστα χαρακτήρων είτε μια συνάρτηση η οποία λαμβάνει έναν χαρακτήρα και επιστρέφει true/false.


## Examples

### Example #1 
Διαχωρίστε την είσοδο κάθε φορά που ένα κεφαλαίο ή πεζό γράμμα ακολουθείται από ένα ψηφίο.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
