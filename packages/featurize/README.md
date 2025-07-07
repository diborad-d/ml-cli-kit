# Featurize

Part of the ML CLI Toolkit.
# Featurize is a command-line tool for extracting features from text data.
# It supports various feature extraction methods, including TF-IDF, word embeddings, and custom feature extraction.
# ## Installation

```bash
npm install @ml-cli-kit/featurize
```
# ## Usage

```bash
featurize --input <input_file> --output <output_file> [options]
```
# ## Options
- `--input`: Path to the input text file.
- `--output`: Path to the output file where features will be saved.
- `--method`: Feature extraction method to use (e.g., `tfidf`, `word2vec`, `custom`).
- `--custom-function`: Path to a custom feature extraction function (if using `custom` method).
- `--vector-size`: Size of the feature vectors (default: 100).
- `--verbose`: Enable verbose output.
# ## Example

```bash
featurize --input data.txt --output features.json --method tfidf --vector-size 200
```
# ## Custom Feature Extraction

```bash
featurize --input data.txt --output features.json --method custom --custom-function ./custom_feature_extraction.js
```
# ## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
# ## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
# ## Author
Dibora D
