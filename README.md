# EduCertify

A dApp based on the Tezos blockchain that aims to make it easier to verify educational certifications.

## Plans for the dApp

### Releasing a certificate

The educational organization issues and signs a certificate with the student's grades, then sends the document to be stored in the blockchain. The document hashes are then attached to the owner of the certification

### Verifying the certificate

When the student wishes to present the certificate as evidence of his education at an institution, it can be verified by matching the hash of the presented document with the hash in the blockchain. The document hashes must match to affirm the legitamacy of the certification.

## Final outcome of dApp

### Problem it tries to solve

An educational organization issues and signs a certificate for a student. The document is stored in the blockchain in the form of the certificate ID, date of issue and the first and last name of the student.
This aims to reduce fake certificate production as employers are able to verify the certificate's legitamacy on their own.****

## Planned Tech Stack

- React for our front end
- Smartpy for handling smart contracts
- Taquito for linking smart contracts with our front end
- Others
