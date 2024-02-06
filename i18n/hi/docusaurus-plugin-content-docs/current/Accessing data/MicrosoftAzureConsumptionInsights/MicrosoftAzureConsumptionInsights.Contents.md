---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


उन्नत क्वेरी फ़ंक्शन प्रदान करें.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Remarks

उन्नत क्वेरी फ़ंक्शन प्रदान करें.


## Examples

### Example #1 
आज को 2017-6-15 मानकर, 2017-5-1 से 2017-6-15 के बीच का सारांश डेटा प्राप्त करें
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
फ़ंक्शन 2017-5-1 से 2017-6-15 के बीच का सारांश डेटा देगा
```


### Example #2 
आज को 2017-6-15 मानकर, अप्रैल 2017 का सारांश डेटा प्राप्त करें.
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
फ़ंक्शन से 2017-4-1 और 2017-4-30 के बीच का डेटा मिलेगा
```


### Example #3 
आज को 2017-6-15 मानकर, अब से लेकर अप्रैल 2017 तक का सारांश डेटा प्राप्त करें.
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
फ़ंक्शन से 2017-4-1 से 2017-6-15 के बीच का डेटा मिलेगा
```


### Example #4 
आज को 2017-6-15 मानकर, पिछले दिसंबर से इस फरवरी तक का सारांश डेटा प्राप्त करें 
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)
      in     
          result
    
```

Result: 
```powerquery
फ़ंक्शन से 2016-12-1 और 2017-2-28 के बीच का डेटा मिलेगा
```


### Example #5 
आज को 2017-6-15 मानकर, पिछले 18 महीने के मार्केटप्लेस शुल्क प्राप्त करें
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "MarketplaceCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
फ़ंक्शन से 2017-6-15 और 2015-12-1 के बीच का डेटा मिलेगा
```


### Example #6 
आज को 2017-6-15 मानकर, जून 2017 और मई 2017 का विवरण शुल्क प्राप्त करें
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "DetailCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
फ़ंक्शन से 2017-5-1 और 2017-6-15 के बीच का डेटा मिलेगा
```


### Example #7 
आज को 2017-07-03 मानकर, जुलाई 2016 का विस्तृत शुल्क प्राप्त करें
```powerquery

      let  
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "DetailCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      in     
          result
    
```

Result: 
```powerquery
फ़ंक्शन 2016-07-01 और 2016-07-31 के बीच का डेटा लौटाएगा
```


### Example #8 
आज को 2017-7-13 मानकर, पिछले 10 महीने और इस महीने के 13 दिनों का शेषराशि का सारांश प्राप्त करें
```powerquery

      let  
          enrollmentNumber = "100",
          optionalParameters = [ dataType = "Summaries", numberOfMonth = 10 ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      in     
          result
    
```

Result: 
```powerquery
इस फ़ंक्शन से 2016-9-1 और 2017-7-13 के बीच का डेटा मिलेगा
```



