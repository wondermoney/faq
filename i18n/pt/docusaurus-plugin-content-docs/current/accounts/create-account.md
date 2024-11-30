---
sidebar_position: 1
---

# Create Account

An account is an entity that has a balance and transactions. This is most commonly used to represent a bank account.
There are two types of accounts:

- Linked: A linked account is an account that is linked to a bank account. This is the recommended way to create an account.
- Unlinked: An unlinked account is an account that is manually created and does not have a bank account linked to it.

## Linked Accounts

Linked accounts are accounts that are linked to a bank account. This is the recommended way to create an account.
When you choose to create a linked account, you will be asked to select your bank entity.
At this point, you will be redirected to the provider's portal to authenticate and link your bank account. We currently use Nordigen (a GoCardless company) as out main provider, a certified PSD2 API aggregator.

![Nordigen portal](./img/nordigen.png)

You can see all the information that we are requesting from your bank account: balances, account details and transactions. This authorization is only valid for 90 days, after which you will need to re-authenticate.

:::info

You will only be asked to authenticate with your bank directly. We will **never** ask for your credentials, or any related information.

:::

Once you have linked your bank account, you will be redirected back to the dashboard and your account will be created.

## Unlinked Accounts

Unlinked accounts are accounts that are manually created and do not have a bank account linked to it.
In this case, you'll have to specify the initial balance of the account.
After that, you can manually add transactions to the account.

:::warning

This is not recommended, as it will not be possible to automatically import transactions from your bank account.

:::

## FAQ

### My bank is not listed

We are constantly adding new banks to our list. If your bank is not listed, please contact us and we'll add it as soon as possible.

### I've created a linked account, but I don't see any transactions

Depending on your bank, it can take a few minutes for the transactions to be imported. If you don't see any transactions after a few minutes, please contact us.

### Can I switch from an unlinked account to a linked account, or vice-versa ?

At this moment, this can only be done on our backoffice. If you need to change the type of account, reach out to us and we'll help you out.
