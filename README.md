# BetVal Project
## Routes for User
### to register a new user
- user/register : post
```
{
    name:
    email:
    password:
}
```

### to login an existing user
- user/login :post
```
{
    email:
    password:
}
```

### to view the profile of an authenticated user
- user/profile :post

## Routes for Matches
### to upload .xlsx file to insert football match data in database
- football/upload :post
```
{
    file: (.xlsx)
}
```

### tp view list of football matches in database
- football/matches :get

## Routes for user balances
### to add and update balance for a user
- user-balance/add :post
```
{
    userId:
    normalBalance:
    freeBetBalance:
}
```

## Routes for user betslip
### to add bet on match in user betslip
- user-betslip/add :post
```
{
    matchId:
    homeOdd:
    drawOdd:
    awayOdd:
    bttsYes:
    bttsNo:
    over25:
    under25:
    stake:
}
```

### to get data from bet slip for a user
- user-betslip/get :get

## Routes for match result
### to add match result
- match-result/add :post
```
{
    matchId:
    isHomeTeamWon:
    isAwayTeamWon:
    isDraw:
    isBtts:
    isOver25:
}
```

### to view match result
- match-result/get :get
```
{
    matchId:
}
```

## Routes for winning users
### to check winning status for a specific authenticated user
- won-users/get :get
```
{
    matchId:
}
```

### to check all winning users
- won-users/ :get
```
{
    matchId:
}
```