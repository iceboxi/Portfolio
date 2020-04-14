<template>
  <div class="skill">
    <h5>{{title}}</h5>
    <ul>
      <template v-if="groupedSkills">
        <template v-for="(group, index) in groupedSkills">
          <li class="group" :key="'g' + index">{{group.title}}</li>
          <li v-for="skill in group.skills" :key="skill">{{skill}}</li>
        </template>
      </template>
      <template v-else>
        <li v-for="(skill,index) in skills" :key="index">{{skill}}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SkillBox",
  props: ["title", "skills", "groupedSkills"]
};
</script>

<style lang="scss">
@import "@/css/const.scss";

.skill {
  ul {
    padding: 0;
  }

  li {
    background-color: $mianColor;
    color: $darkBackgroundColor;
    padding: 1px 12px;
    margin: 4px 0 4px 0;
    list-style: none;
    display: inline-block;
    border-radius: 6px;
    margin-right: 4px;

    &.group {
      background-color: transparent;
      color: $subTextColor;
    }
  }
}
</style>
