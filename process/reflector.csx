#r "nuget: Newtonsoft.Json, 13.0.3"

using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using Newtonsoft.Json;

string baseDir = @"C:\git\hub\powerquery-io\dlls";

// Get all directories under base directory
var dirs = Directory.GetDirectories(baseDir);

foreach (var dir in dirs)
{
    // Extract language/folder name
    var lang = Path.GetFileName(dir);

    var assemblyPath = Path.Combine(dir, "Microsoft.MashupEngine.Resources.dll");
    if (File.Exists(assemblyPath))
    {
        System.Reflection.Assembly assem = System.Reflection.Assembly.LoadFrom(assemblyPath);
        System.IO.Stream fs = assem.GetManifestResourceStream($"Microsoft.Mashup.Engine1.FunctionDescriptionStrings.{lang}.resources");

        if (fs != null)
        {
            var rr = new System.Resources.ResourceReader(fs);

            // Convert ResourceReader to Dictionary
            var resourceDictionary = new Dictionary<string, string>();
            foreach (DictionaryEntry entry in rr)
            {
                resourceDictionary.Add(entry.Key.ToString(), entry.Value.ToString());
            }

            // Serialize the dictionary to JSON
            string jsonOutput = JsonConvert.SerializeObject(resourceDictionary, Formatting.Indented);

            // Save JSON to a file named after the language
            File.WriteAllText($"{lang}.json", jsonOutput);

            Console.WriteLine($"{lang}.json has been generated.");
        }
        else
        {
            Console.WriteLine($"Resource stream not found for language: {lang}");
        }
    }
    else
    {
        Console.WriteLine($"Assembly not found for language: {lang}");
    }
}
