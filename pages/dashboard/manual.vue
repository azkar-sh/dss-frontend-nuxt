<template>
  <NuxtLayout name="dashboard">
    <span class="text-xl xl:text-2xl font-bold mb-2">
      Welcome to Decision System Analysis
    </span>

    <p class="mb-4 text-sm xl:text-lg">
      Before getting started, let's familiarize ourselves with some key terms
      used in this application:
    </p>

    <ul class="list-disc pl-4 xl:pl-8 mb-4 text-xs xl:text-base">
      <li>
        <strong>Subject:</strong> The name of the system we want to analyze
        (e.g., Analysis of Affordable House, Choosing a PC Monitor).
      </li>
      <li>
        <strong>Criteria:</strong> Factors for consideration (e.g., cost, access
        to public transportation, access to restaurants, house structure, etc.).
      </li>
      <li>
        <strong>Criteria Weight:</strong> Determines the level of priority for
        each criterion in the subject.
        <span class="text-red-500 font-bold block xl:inline">
          To obtain results, the total weight of criteria assigned to each
          subject must add up to 100. Results cannot be generated until this
          requirement is fulfilled.
        </span>
      </li>
      <li>
        <strong>Criteria Kind:</strong> Indicates if the criterion is a cost or
        benefit. Cost criteria are better when smaller; benefit criteria are
        better when larger.
      </li>
      <li><strong>Target:</strong> Represents every target in the subject.</li>
    </ul>

    <p class="mb-4 text-sm xl:text-lg">
      Now, let's explore how to use the application:
    </p>

    <ul class="list-decimal pl-4 xl:pl-8 mb-4 text-xs xl:text-base">
      <li>
        <strong>Create Subject</strong>
        To initiate a fresh topic or subject, simply press the
        <strong>Create Subject</strong> button located at the upper right corner
        of the page. A modal will emerge, asking you to input the subject name
        and description. Hit <strong>Create</strong> to establish the subject.
        <NuxtImg
          src="/images/tutorial/create-subject1.png"
          alt="create-subject"
          class="mb-4 mt-2"
        />
      </li>
      <li>
        <strong>Create Criteria</strong>
        <br />
        When introducing a new criteria or your consideration, click on the
        <strong>Create Criteria</strong> button situated at the top right. A
        dialogue box will appear, enabling you to fill in the criteria details
        like name, criteria kind and weight. Subsequently, click
        <strong>Create</strong> to append the criteria. <br />
        <NuxtImg
          src="/images/tutorial/create-criteria1.png"
          alt="create-criteria"
          class="mb-4 mt-2"
        />
      </li>
      <li>
        <strong>Create Target</strong>
        <br />
        For adding a new target, opt for the <strong> Add Target </strong>
        button positioned in the upper right corner. A window will show up,
        permitting you to input the target details. Click
        <strong>Add</strong> to incorporate the target. <br />
        <img
          src="/images/tutorial/create-target1.png"
          alt="create-target"
          class="mb-4 mt-2"
        />
      </li>
    </ul>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Manual",
});
</script>

<style></style>
