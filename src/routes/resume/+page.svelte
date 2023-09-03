<script>
	import { base } from '$app/paths';
	import Experience from '$lib/Experience.svelte';
</script>

<svelte:head>
	<title>Doga Tekin | Resume</title>
</svelte:head>

<div class="content">
	<h1>Resume</h1>

	<h2>Education</h2>

	<Experience
		name="EPFL"
		lightlogo="{base}/resume/epfl.svg"
		darklogo="{base}/resume/epfl.svg"
		dates="2018 – 2021"
		location="Lausanne, CH"
		role="Computer Science MS"
		gpa="<a href='{base}/resume/Doga_Tekin_EPFL_Transcript.pdf'>GPA: 5.85 / 6.00</a>"
	>
		<ul>
			<li>
				<strong>
					Graduated 1st in my class with the highest GPA in the Computer Science department.
				</strong>
			</li>
			<li>
				Coursework: Neural Networks, Machine Learning, Natural Language Processing, Applied Data
				Analysis, Data Visualization
			</li>
		</ul>
	</Experience>

	<Experience
		name="Bilkent University"
		lightlogo="{base}/resume/bilkent.svg"
		darklogo="{base}/resume/bilkent.svg"
		dates="2014 – 2018"
		location="Ankara, TR"
		role="Electrical and Electronics Engineering BS"
		gpa="<a href='{base}/resume/Doga_Tekin_Bilkent_Transcript.pdf'>GPA: 3.79 / 4.00</a>"
	>
		<ul>
			<li>
				50% scholarship for ranking 1976th among 2,000,000 students taking the undergraduate
				placement examination.
			</li>
			<li>
				Coursework: Algorithms, Data Structures, Machine Learning, Neural Networks, Statistical
				Learning, Data Analysis
			</li>
		</ul>
	</Experience>

	<h2>Experience</h2>

	<Experience
		name="Oracle Labs"
		lightlogo="{base}/resume/oracle.png"
		darklogo="{base}/resume/oracle.png"
		dates="Sep 2023 – Present"
		location="Zurich, CH"
		role="Senior Research Engineer"
		gpa=""
	>
		<ul>
			<li>
				Researching and developing ML solutions to improve Oracle-internal and customer products
				worldwide.
			</li>
		</ul>
	</Experience>

	<Experience
		name="Oracle Labs"
		lightlogo="{base}/resume/oracle.png"
		darklogo="{base}/resume/oracle.png"
		dates="Oct 2021 – Aug 2023"
		location="Zurich, CH"
		role="Research Engineer"
		gpa=""
	>
		<ul>
			<li>
				Researching and developing ML solutions to improve Oracle-internal and customer products
				worldwide.
			</li>
		</ul>
	</Experience>

	<Experience
		name="Oracle Labs"
		lightlogo="{base}/resume/oracle.png"
		darklogo="{base}/resume/oracle.png"
		dates="Feb 2021 – Sep 2021"
		location="Zurich, CH"
		role="Research Engineer Intern"
		gpa=""
	>
		<ul>
			<li>
				Developed a patent-pending natural language processing pipeline to transform text documents
				and tables into knowledge graphs.
			</li>
		</ul>
	</Experience>

	<Experience
		name="Accenture Labs"
		lightlogo="{base}/resume/accenture.svg"
		darklogo="{base}/resume/accenture-dark.svg"
		dates="Aug 2019 – Jan 2020"
		location="Dublin, IE"
		role="Research Engineer Intern"
		gpa=""
	>
		<ul>
			<li>
				Researched novel evolutionary hyperparameter optimization methods for training knowledge
				graph embedding models.
			</li>
			<li>
				Implemented them in Accenture's open source knowledge graph library <a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Accenture/AmpliGraph">AmpliGraph</a
				>.
			</li>
		</ul>
	</Experience>

	<Experience
		name="EPFL Lions Lab"
		lightlogo="{base}/resume/epfl.svg"
		darklogo="{base}/resume/epfl.svg"
		dates="Feb 2019 – Jun 2020"
		location="Lausanne, CH"
		role="Research Assisstant"
		gpa=""
	>
		<ul>
			<li>
				Implemented a novel exploration method for deep reinforcement learning algorithms using
				TensorFlow.
			</li>
			<li>Co-authored a paper that was accepted to the OptRL workshop at NeurIPS 2019.</li>
		</ul>
	</Experience>

	<Experience
		name="Bilkent Data Science Group"
		lightlogo="{base}/resume/bilkent.svg"
		darklogo="{base}/resume/bilkent.svg"
		dates="Sep 2017 – Feb 2018"
		location="Ankara, TR"
		role="Research Assisstant"
		gpa=""
	>
		<ul>
			<li>Built a Python framework for the offline evaluation of multi-armed bandit algorithms.</li>
			<li>
				Modified the SQL code of a medical dataset simulator to generate data to train three
				different bandit models.
			</li>
		</ul>
	</Experience>

	<Experience
		name="ETH Computer Vision Lab"
		lightlogo="{base}/resume/eth.svg"
		darklogo="{base}/resume/eth-dark.svg"
		dates="Jun 2017 – Aug 2017"
		location="Zurich, CH"
		role="Research Intern"
		gpa=""
	>
		<ul>
			<li>
				Implemented a neural network in MATLAB to perform semantic segmentation on magnetic
				resonance images.
			</li>
			<li>
				Added four new features to the modeling platform <a
					target="_blank"
					rel="noreferrer"
					href="https://www.artisynth.org/Main/HomePage">ArtiSynth</a
				> by integrating my code into the large Java codebase.
			</li>
		</ul>
	</Experience>

	<Experience
		name="Huawei R&D Center"
		lightlogo="{base}/resume/huawei.svg"
		darklogo="{base}/resume/huawei-dark.svg"
		dates="Jun 2016 – Jul 2016"
		location="Istanbul, TR"
		role="Research & Development Intern"
		gpa=""
	>
		<ul>
			<li>
				Collected live tweets using Java and predicted the response time of a Twitter account to new
				tweets using Weka.
			</li>
		</ul>
	</Experience>

	<h2>Publications</h2>

	<ul>
		<li>
			K. Parameswaran, <strong>D. Tekin</strong>, P. Rolland, V. Cevher.
			<br />
			<a
				target="_blank"
				rel="noreferrer"
				href="https://optrl2019.github.io/assets/accepted_papers/36.pdf"
			>
				“Reinforcement Learning with Langevin Dynamics”
			</a>.
			<br />
			In: <em>NeurIPS 2019 Optimization Foundations for Reinforcement Learning Workshop</em>.
		</li>
	</ul>

	<h2>Skills</h2>

	<div id="skills">
		<h3 class="mt-3">Programming Languages</h3>
		<p>Python, Java, JavaScript, MATLAB, C++, SQL, R, Scala</p>

		<h3>Frameworks</h3>
		<p>PyTorch, TensorFlow, NumPy, Pandas, Scikit-learn, Matplotlib</p>

		<h3>Human Languages</h3>
		<p>Native Turkish, Fluent English (TOEFL 119/120), Basic French</p>
	</div>

	<h2>Extracurricular</h2>

	<Experience
		name="Bilkent Engineering Society"
		lightlogo="{base}/resume/mt.png"
		darklogo="{base}/resume/mt-dark.png"
		dates="2016"
		location="Ankara, TR"
		role="Vice President"
		gpa=""
	>
		<ul>
			<li>
				Held weekly meetings with over 100 members, managed a 150.000 TL budget and organized
				career/social events.
			</li>
			<li>
				Coordinated a <a
					target="_blank"
					rel="noreferrer"
					href="https://drive.google.com/file/d/1_BhVhsrBJ7TbWoOzvImFbgS1FCf0JWgF/view?usp=sharing"
					>management and leadership conference</a
				> with over 600 attendees.
			</li>
		</ul>
	</Experience>

	<div class="downloader">
		<a href="{base}/resume/Doga_Tekin_Resume.pdf">
			<i class="fas fa-file-download" /> PDF
		</a>
	</div>
</div>

<style>
	.downloader {
		text-align: center;
		margin-top: 3rem auto;
	}

	.downloader a {
		text-decoration: none;
	}

	.downloader a i {
		margin-right: 0.5rem;
	}

	h2 {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	@media (max-width: 767px) {
		div {
			width: 540px;
			max-width: 100%;
			margin: 0 auto;
		}
	}

	@media (min-width: 768px) {
		#skills {
			margin-left: 2rem;
		}
	}
</style>
