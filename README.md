# SME Loan Pre-Screen: Right-First-Time Application

## Project Overview
This web application is a prototype for the Bank's "Right-First-Time" program. The goal is to optimize the loan screening process by ensuring customers submit complete applications.

Currently, partial document submission leads to slow processing or rejection. This tool helps pre-screen customers based on SME classification and document availability before the actual credit underwriting process begins.

## Key Objectives
* **Clear Requirements:** Provide a simple checklist for loan applications.
* **Reduce Rejections:** Minimize application bounces due to missing documents.
* **Eligibility Check:** Clarify eligibility parameters for the customer.

## Application Logic

### 1. SME Classification
The application calculates the category of the SME based on **Investment in Plant & Machinery** and **Annual Turnover**.

|  Category  | Investment Limit |Turnover Limit|
| **Micro**  | ≤ ₹2.5 Crore     | ≤ ₹10 Crore  |
| **Small**  | ≤ ₹25 Crore      | ≤ ₹100 Crore |
| **Medium** | ≤ ₹125 Crore     | ≤ ₹500 Crore |

### 2. Application Status Rules
The system evaluates the application status based on the combination of documents provided.

* **REJECTED:** If any **KYC Document** is missing, the application is automatically rejected.
* **CONDITIONAL APPROVAL:** If **KYC** is complete and **Income Proof** is submitted, but Business Proof is missing.
* **ON HOLD:** If **KYC** is complete and **Business Proof** is submitted, but Income Proof is missing
* **READY FOR APPRAISAL:** Only when **KYC**, **Income**, and **Business Proof** are ALL submitted.

## Document Checklist
The application checks for the following specific documents:

**KYC Documents (Mandatory)**
* PAN Card of the Business
* PAN Card of Business Owners
* Aadhar Card of Business Owners
* Address Proof of Business Office

**Income Proof**
* P&L Statement (3 Years)
* Balance Sheet (3 Years)
* Income Tax Return (3 Years)
* Business Bank Statement (6-12 Months)

**Business Proof**
* Registration Document
* Corporate Identification Number (if applicable)
* List of Board of Directors (for Pvt Ltd)

## How to Run
1.  Download `index.html`, `style.css`, and `script.js`.
2.  Ensure all files are in the same folder.
3.  Open `index.html` in any web browser.
