// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
});

// 移动端菜单切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击导航链接后关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 平滑滚动（排除项目链接）
document.querySelectorAll('a[href^="#"]:not(.project-link)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // 考虑导航栏高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有卡片元素
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.interest-card, .project-card, .about-content');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// 导航栏高亮当前部分
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 添加活动状态的样式
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// 项目详情模态框功能
document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showProjectModal(index);
        });
    });
});

// 项目详情数据
const projectDetails = [
    {
        title: '项目一',
        description: '这是一个重要的技术项目，展示了我在系统设计和开发方面的能力。项目涉及多个技术栈，包括前端、后端和数据库设计。',
        tags: ['Web开发', '数据库', 'API设计'],
        details: '这是一个全栈Web应用项目，采用了现代化的技术栈。前端使用响应式设计，确保在各种设备上都有良好的用户体验。后端采用RESTful API架构，实现了高效的数据交互。数据库设计考虑了数据一致性和查询性能，使用了索引优化和查询缓存等技术。项目成功部署并稳定运行，处理了大量并发请求。',
        technologies: ['HTML5/CSS3', 'JavaScript', 'Node.js', 'MySQL', 'Redis']
    },
    {
        title: '项目二',
        description: '移动应用开发项目，专注于用户体验和性能优化。项目成功上线并获得了用户的好评。',
        tags: ['移动开发', 'UI/UX', '性能优化'],
        details: '这是一个跨平台移动应用项目，专注于提供流畅的用户体验。在UI/UX设计方面，我们进行了大量的用户调研和A/B测试，确保界面直观易用。性能优化方面，我们实现了代码分割、懒加载、图片压缩等技术，将应用启动时间减少了40%，内存占用降低了30%。应用上线后获得了4.8分的用户评分。',
        technologies: ['React Native', 'Redux', 'Firebase', 'Figma']
    },
    {
        title: '项目三',
        description: '人工智能和机器学习项目，使用先进的算法解决实际问题。项目在准确性和效率方面都达到了预期目标。',
        tags: ['机器学习', 'Python', '数据分析'],
        details: '这是一个基于机器学习的智能分析系统。我们使用了多种算法模型，包括深度学习神经网络和传统机器学习算法。通过大量的数据训练和调优，模型的准确率达到了95%以上。项目还实现了实时数据处理和预测功能，能够快速响应业务需求。系统已经在生产环境中稳定运行，为业务决策提供了有力支持。',
        technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy']
    },
    {
        title: '项目四',
        description: '云平台和微服务架构项目，实现了高可用性和可扩展性。项目支持大规模并发访问，稳定运行。',
        tags: ['云服务', '微服务', 'DevOps'],
        details: '这是一个基于微服务架构的云平台项目。系统采用了容器化部署，使用Docker和Kubernetes进行编排管理。微服务架构使得系统具有良好的可扩展性，可以根据负载动态调整资源。我们实现了服务发现、负载均衡、熔断降级等机制，确保系统的高可用性。通过CI/CD流水线，实现了自动化测试和部署，大大提高了开发效率。系统支持每秒处理数万次请求，可用性达到99.9%。',
        technologies: ['Docker', 'Kubernetes', 'Spring Cloud', 'AWS', 'Jenkins']
    }
];

// 显示项目详情模态框
function showProjectModal(index) {
    const project = projectDetails[index];
    if (!project) return;
    
    // 创建模态框HTML
    const modalHTML = `
        <div class="project-modal" id="projectModal">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close" aria-label="关闭">&times;</button>
                <h2>${project.title}</h2>
                <p class="modal-description">${project.description}</p>
                <div class="modal-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="modal-details">
                    <h3>项目详情</h3>
                    <p>${project.details}</p>
                </div>
                <div class="modal-technologies">
                    <h3>技术栈</h3>
                    <div class="tech-list">
                        ${project.technologies.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 添加到页面
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const modal = document.getElementById('projectModal');
    
    // 显示动画
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // 关闭按钮事件
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // ESC键关闭
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
}

