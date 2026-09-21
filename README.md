# 🛡️ Retrieval-Augmented Semantic Mapping for Vulnerability Detection via Multi-View Code Similarity

## 🤖 Agentic AI-Based Software Vulnerability Detection

**Team:** Nexus Prime
**Theme:** Cyber Security
**College:** Keshav Memorial Engineering College

**Team Members:**
* B. Venkat Hrithik
* N. Siri Vennela
* P. Jayatheerth
* Ch. Sreekar

---

## 📌 Project Overview

**Retrieval-Augmented Semantic Mapping for Vulnerability Detection via Multi-View Code Similarity** is an **Agentic AI-powered cybersecurity system** designed to identify software vulnerabilities in source-code functions.

The system combines **Retrieval-Augmented Generation (RAG)**, **multi-view code similarity**, program-structure analysis, and an **LLM-based reasoning agent** to determine whether a given source-code function is:

* 🔴 **Vulnerable**
* 🟢 **Fixed / Safe**

Instead of relying only on the surface similarity of source code, the system analyzes multiple representations of code, including the source code itself, its Abstract Syntax Tree (AST), security-related knowledge, line-level changes, and AST-level changes.

Historical vulnerable–fixed code pairs from the **RanSMAP dataset** are used to construct a knowledge base. When a new function is submitted, the agent retrieves relevant historical vulnerability patterns and uses them as contextual evidence before generating the final classification and explanation.

---

# 🎯 Problem Statement

Software vulnerabilities are frequently hidden inside seemingly normal source-code functions. Traditional static analysis tools may depend heavily on predefined rules and signatures, while conventional machine-learning approaches may struggle when a vulnerability appears in a structurally different implementation.

The goal of this project is to build an intelligent system capable of:

1. Understanding the semantic and structural characteristics of source code.
2. Retrieving historically similar vulnerability patterns.
3. Comparing a new function against vulnerable and fixed examples.
4. Reasoning over the retrieved evidence.
5. Producing a **Vulnerable / Fixed-Safe** decision.
6. Providing a human-readable explanation of the detected vulnerability.

---

# 🤖 Why Agentic AI?

The system is designed as an **agentic workflow**, where the AI does more than simply classify an input.

The vulnerability-detection agent receives a source-code function and performs a sequence of reasoning and tool-assisted operations:

```text
                ┌──────────────────────┐
                │   Source Code Input  │
                └──────────┬───────────┘
                           ↓
                ┌──────────────────────┐
                │   Code Understanding │
                │  & Feature Extraction│
                └──────────┬───────────┘
                           ↓
          ┌────────────────┴────────────────┐
          ↓                                 ↓
   Code Representation                AST Representation
          │                                 │
          └────────────────┬────────────────┘
                           ↓
                ┌──────────────────────┐
                │   Retrieval Agent    │
                │                      │
                │ Search vulnerability│
                │ knowledge base      │
                └──────────┬───────────┘
                           ↓
                ┌──────────────────────┐
                │ Multi-View Similarity│
                │      Analysis        │
                └──────────┬───────────┘
                           ↓
                ┌──────────────────────┐
                │   Evidence Assembly  │
                └──────────┬───────────┘
                           ↓
                ┌──────────────────────┐
                │    LLM Reasoning     │
                │        Agent         │
                └──────────┬───────────┘
                           ↓
              ┌────────────┴────────────┐
              ↓                         ↓
       Vulnerable                 Fixed / Safe
              │                         │
              └────────────┬────────────┘
                           ↓
                ┌──────────────────────┐
                │ Explanation & Report  │
                └──────────────────────┘
```

The agent can therefore use retrieved evidence and multiple code representations before producing its final decision.

---

# 🧠 Core Approach

## 1. Knowledge Base Construction

The system starts with historical vulnerable–fixed code pairs from the **RanSMAP dataset**.

Each example is processed to extract multiple views of the code:

* Source-code representation
* AST representation
* Security / vulnerability knowledge
* Line-level changes
* AST-level changes

These representations form the foundation of the vulnerability knowledge base.

---

## 2. Multi-View Code Analysis

A major component of the system is its ability to compare code from multiple perspectives.

### Source Code View

Examines the actual implementation and textual characteristics of the function.

### AST View

The Abstract Syntax Tree captures the structural organization of the program and helps identify similarities even when source-code formatting or variable names differ.

### Knowledge View

Represents vulnerability-related information associated with historical examples.

### Line-Change View

Examines changes between vulnerable and fixed implementations at the line level.

### AST-Change View

Examines structural changes between vulnerable and fixed versions using AST representations.

Combining these views provides richer evidence than relying on a single similarity measure.

---

# 🔎 Retrieval-Augmented Generation

The system follows a **RAG architecture**.

When a new function is submitted:

```text
New Code
   ↓
Feature Extraction
   ↓
Query Representation
   ↓
Similarity Search
   ↓
Retrieve Relevant Historical Examples
   ↓
Combine Retrieved Evidence
   ↓
LLM Agent
   ↓
Final Vulnerability Decision
```

The retrieved examples provide the LLM with concrete historical vulnerability patterns rather than requiring it to make a decision solely from its pretrained knowledge.

---

# 🧩 Agent Workflow

### Step 1 — Receive Input

The user provides a source-code function that needs to be analyzed.

### Step 2 — Understand the Code

The system extracts relevant representations from the function, including code and structural information.

### Step 3 — Search the Knowledge Base

The retrieval component searches historical vulnerability examples for semantically and structurally similar cases.

### Step 4 — Multi-View Comparison

Retrieved candidates are compared using the available code, AST, knowledge, line-change, and AST-change information.

### Step 5 — Evidence Assembly

The most relevant retrieved patterns are assembled into contextual evidence for the reasoning stage.

### Step 6 — Agentic Reasoning

The LLM agent analyzes the input function together with the retrieved evidence.

It determines whether the observed code resembles known vulnerable or fixed patterns.

### Step 7 — Generate Decision

The system produces:

```text
Classification:
VULNERABLE / FIXED-SAFE

Explanation:
Why the function was classified this way
and which retrieved evidence supports the decision.
```

---

# 🧠 RAG + Agentic AI Architecture

```text
                    USER
                     │
                     ▼
             ┌───────────────┐
             │ Source Code   │
             └───────┬───────┘
                     │
                     ▼
          ┌─────────────────────┐
          │ Code Analysis Agent │
          └──────────┬──────────┘
                     │
          ┌──────────┴───────────┐
          ▼                      ▼
   Code Features            AST Features
          │                      │
          └──────────┬───────────┘
                     ▼
             ┌───────────────┐
             │ Retrieval     │
             │ Agent         │
             └───────┬───────┘
                     │
                     ▼
        ┌─────────────────────────┐
        │ Vulnerability Knowledge │
        │ Base                    │
        └───────────┬─────────────┘
                    │
                    ▼
          Similar Historical Cases
                    │
                    ▼
             ┌───────────────┐
             │ Evidence      │
             │ Aggregation   │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │ LLM Reasoning │
             │ Agent         │
             └───────┬───────┘
                     │
              ┌──────┴──────┐
              ▼             ▼
         Vulnerable     Fixed / Safe
              │             │
              └──────┬──────┘
                     ▼
             Explanation Report
```

---

# 🛠️ Technology Stack

| Component               | Technology                   |
| ----------------------- | ---------------------------- |
| Programming Language    | Python                       |
| Development Environment | Google Colab                 |
| Dataset                 | RanSMAP                      |
| Data Processing         | Pandas, NumPy                |
| Machine Learning        | Scikit-learn                 |
| Deep Learning           | TensorFlow / Keras           |
| Code Analysis           | AST-based representations    |
| Retrieval               | Multi-view similarity search |
| AI Reasoning            | LLM / pretrained model       |
| Architecture            | RAG + Agentic AI             |
| Visualization           | Matplotlib, Seaborn          |

The project does **not require implementing a Transformer architecture from scratch**. An LLM/API or pretrained embedding model can be integrated as the reasoning or representation component.

---

# 📂 Dataset

The project uses the **RanSMAP dataset**, containing historical vulnerable and fixed source-code examples.

These examples provide the knowledge required for retrieving previously observed vulnerability patterns.

The dataset is processed to construct the vulnerability knowledge base used by the retrieval component.

---

# 🔬 Multi-View Similarity

The central idea of the project is to avoid depending on only one representation of source code.

For a query function `Q`, the system considers multiple representations:

```text
Qcode
QAST
Qknowledge
Qline-change
QAST-change
```

These representations are compared with corresponding representations from historical vulnerability examples.

A combined similarity perspective can then be used to identify the most relevant historical cases.

Conceptually:

```text
MultiViewSimilarity(Q, K)
        =
Code Similarity
+ AST Similarity
+ Knowledge Similarity
+ Line-Change Similarity
+ AST-Change Similarity
```

The retrieved cases become evidence for the downstream reasoning agent.

---

# 🔐 Vulnerability Detection

The final system produces a binary security assessment:

### 🔴 Vulnerable

The submitted function exhibits patterns that correspond to known vulnerable implementations or retrieved vulnerability evidence.

### 🟢 Fixed / Safe

The submitted function is more consistent with known fixed implementations and does not exhibit the retrieved vulnerable pattern.

The LLM agent also generates an explanation so that the result is interpretable to a developer or security analyst.

---

# 💡 Example

### Input

```c
void process(char *input) {
    char buffer[64];
    strcpy(buffer, input);
}
```

### Agent Workflow

```text
Input Function
      ↓
Code + AST Analysis
      ↓
Retrieve Similar Historical Examples
      ↓
Compare Vulnerable / Fixed Patterns
      ↓
LLM Reasoning
      ↓
VULNERABLE
```

### Example Output

```text
Classification: VULNERABLE

Reason:
The function copies externally supplied input into a fixed-size
buffer without an apparent bounds check. Similar historical
vulnerability patterns retrieved from the knowledge base indicate
a potential buffer overflow condition.
```

The example above illustrates the intended interaction; actual decisions should be based on the evidence retrieved by the implemented system.

---

# 🚀 MVP

The minimum viable prototype demonstrates the complete workflow:

1. Load historical vulnerability data.
2. Build the vulnerability knowledge base.
3. Process a source-code function.
4. Extract its multi-view representations.
5. Retrieve similar vulnerability examples.
6. Pass the retrieved evidence to the LLM agent.
7. Generate a Vulnerable / Fixed-Safe classification.
8. Produce an explanation of the decision.

---

# 🎯 Key Innovation

The project's distinguishing approach is the combination of:

**RAG + Agentic AI + Multi-View Code Similarity + Vulnerability Knowledge**

Rather than treating vulnerability detection as a simple text-classification problem, the system retrieves historical security evidence and gives an AI reasoning agent access to multiple representations of the code.

This allows the system to connect a new function with previously observed vulnerable and fixed implementations.

---

# 📈 Potential Applications

The system can support:

* Software security analysis
* Secure code review
* Vulnerability triage
* Developer security assistants
* Historical vulnerability investigation
* Automated security analysis pipelines
* Educational cybersecurity analysis

The system is intended as an **assistive security-analysis tool** and should be validated by a qualified security professional before being used for high-impact security decisions.

---

# ⚠️ Limitations and Risks

The system can inherit limitations from its dataset, retrieval mechanism, code representations, and LLM.

Potential issues include:

* False positives
* False negatives
* Incomplete vulnerability knowledge
* Retrieval of irrelevant examples
* LLM hallucination
* Ambiguous source-code semantics
* Dataset bias
* Vulnerabilities not represented in the historical knowledge base

For this reason, the generated classification should be treated as **security-analysis assistance rather than definitive proof of safety**.

---

# 🔮 Future Scope

Future development can extend the system with:

* Larger vulnerability knowledge bases
* Additional vulnerability datasets
* Specialized code embeddings
* More advanced AST and semantic analysis
* CVE/CWE knowledge integration
* Automated patch recommendations
* IDE integration
* GitHub/GitLab integration
* Continuous repository scanning
* Human-in-the-loop security review
* Agentic tool use for static-analysis tools
* Automated vulnerability reports

---

# 👥 Team

## Nexus Prime

**Team Lead:**
B. Venkat Hrithik

**Team Members:**

* N. Siri Vennela
* P. Jayatheerth
* Ch. Sreekar

**College:**
Keshav Memorial Engineering College

**Theme:**
Cyber Security

---

# 📞 Contact

**Contact Number:** 9347107099

---

# 📚 References

* RanSMAP Dataset
* Python
* Pandas
* NumPy
* Scikit-learn
* TensorFlow / Keras
* Matplotlib
* Seaborn
* LLM / pretrained embedding models used in the implementation

Additional papers, APIs, repositories, and model documentation should be added here once the exact resources used in the implementation are finalized.

---

# 📄 License

This project is developed as a hackathon/research prototype by **Nexus Prime**.

License and redistribution terms can be added according to the team's intended publication and repository requirements.