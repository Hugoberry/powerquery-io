---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Εισαγάγετε τη διεύθυνση URL του τελικού σημείου του Azure Enterprise REST API που σχετίζεται με την εγγραφή σας


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Επιστρέφει τα δυαδικά αποτελέσματα της κλήσης στη διεύθυνση URL που καταχωρήθηκε για το Azure Enterprise API.


## Examples

### Example #1 
Χρήση της συνάρτησης AzureEnterprise.Contents για την επιστροφή των αποτελεσμάτων μιας συγκεκριμένης αναφοράς.
```powerquery
        let
            report = Table.FromColumns({Lines.FromBinary(Binary.Buffer(AzureEnterprise.Contents("https://ea.azure.com/rest/12345/usage-report", [month="2014-04", type="summary", fmt="Csv"])),null,null,1252)}),
            skips = Table.Skip(report, 2),
            split =  Table.SplitColumn(skips, "Column1", Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)),
            promoted = Table.PromoteHeaders(split)
        in
            προωθήθηκε
```

Result: 
```powerquery
Πίνακας
```



