import { client } from './sanity'

// ✅ GET LAWYER DATA
export async function getLawyer() {
  return await client.fetch(`*[_type == "lawyer"][0]{
    name,
    title,
    experience,
    bio
  }`)
}

// ✅ GET PRACTICE AREAS (FIRST CREATED → FIRST)
export async function getPracticeAreas() {
  return await client.fetch(`*[_type == "practiceArea"] | order(_createdAt asc){
    title,
    description,
    _createdAt
  }`)
}

// ✅ GET CASES
export async function getCases() {
  return await client.fetch(`*[_type == "caseResult"]`)
}

// ✅ GET TESTIMONIALS
export async function getTestimonials() {
  return await client.fetch(`*[_type == "testimonial"]`)
}