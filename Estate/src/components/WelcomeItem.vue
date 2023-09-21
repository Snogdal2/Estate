<!-- <script>
import { useUsers } from '../stores/counter'
const store = useUsers()
</script> -->

<template>
  <!-- <form action="" method="post"> -->
  <div style="display: grid">
    <form action="http://localhost:3000" method="post">
      <h1>FirstName</h1>
      <input type="text" name="firstName" />
      <h1>Lastname</h1>
      <input type="text" name="lastName" />
      <h1>Gender</h1>
      <input type="text" name="gender" />
      <h1>Age</h1>
      <input type="text" name="age" />
      <h1>Number</h1>
      <input type="text" name="number" />
      <button type="submit" name="submit"></button>
    </form>
  </div>
  <!-- </form> -->
</template>
